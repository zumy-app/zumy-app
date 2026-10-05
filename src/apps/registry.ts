import type { ComponentType } from "react";
import Cloud9InventoryPrivacy from "./Cloud9InventoryPrivacy";

export interface AppPrivacyEntry {
  /** Stable URL slug — use the Android package id. */
  appId: string;
  /** Display name shown on the index and policy header. */
  name: string;
  /** One-line description for the /apps index. */
  tagline: string;
  /** Policy content component. */
  policy: ComponentType;
}

/**
 * Registry of Zumy apps with per-app privacy policies.
 * Canonical URL: /apps/:appId/privacy
 * To onboard an app: add one entry + one content component. No router edits.
 */
export const appPrivacyRegistry: AppPrivacyEntry[] = [
  {
    appId: "app.zumy.cloud9.employee",
    name: "Cloud 9 Inventory",
    tagline: "Store inventory scanner for Cloud 9 Kitchen & Market staff.",
    policy: Cloud9InventoryPrivacy,
  },
];

export const privacyUrlFor = (appId: string) => `/apps/${appId}/privacy`;

export const findAppPrivacy = (appId: string) =>
  appPrivacyRegistry.find((e) => e.appId === appId);
