import { Router } from 'express';

/**
 * Host integrations are installed locally by the CLI. Exposing that installer
 * over HTTP would let remote callers modify host configuration.
 */
export function createIntegrationRoutes(): Router {
  return Router();
}
