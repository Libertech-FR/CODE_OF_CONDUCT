import { spawn } from "child_process";
import { createHash } from "crypto";
import dotenv from "dotenv";
import consola from "consola";
import { readFileSync, writeFileSync } from "fs";

dotenv.config();

function hashEnv() {
  const sum = createHash("sha256");
  const env = Object.fromEntries(Object.entries(process.env).filter(([key]) => !["HOSTNAME", "PATH"].includes(key)));
  console.log("env", env);
  sum.update(JSON.stringify(env));
  return sum.digest("hex");
}

function readHash() {
  try {
    return readFileSync(".env.hash", "utf8");
  } catch (err) {
    return "";
  }
}

function buildNuxt() {
  return new Promise((resolve, reject) => {
    consola.info("Building Nuxt...");
    const building = spawn("yarn", ["build"], { env: process.env, shell: true });

    building.stdout.on("data", (data) => {
      process.stdout.write(data.toString());
    });

    building.stderr.on("data", (data) => {
      process.stderr.write(data.toString());
    });

    building.on("close", (code) => {
      consola.info(`child process exited with code ${code}`);
      code > 0 ? reject() : resolve();

      if (code > 0) return reject();

      consola.info("Hashing .env...");
      writeFileSync(".env.hash", hashEnv());
      return resolve();
    });
  });
}

(async () => {
  if (hashEnv() !== readHash()) {
    consola.warn("Hash changed, rebuilding...");
    consola.info(`Hash: ${hashEnv()}, Previous: ${readHash()}`);
    await buildNuxt();
  }

  consola.info("Starting Nuxt...");
  const starting = spawn("node", [".output/server/index.mjs"], { env: process.env, shell: true });

  starting.stdout.on("data", (data) => {
    process.stdout.write(data.toString());
  });

  starting.stderr.on("data", (data) => {
    process.stderr.write(data.toString());
  });

  starting.on("close", (code) => {
    consola.warn(`child process exited with code ${code}`);
  });
})();
