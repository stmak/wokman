/**
 * ============================================================
 *  BUSINESS CONFIG — Golden Fortune
 * ============================================================
 *  ⚠️  IMPORTANT: This file controls where customer orders are sent.
 *
 *  If you ever need to change the WhatsApp number, change ONLY
 *  the WHATSAPP_NUMBER value below. Do not edit it anywhere else.
 *
 *  Format: country code + number, NO leading "+", NO spaces.
 *  Example for UK: "447766628285"
 * ============================================================
 */

export const WHATSAPP_NUMBER = "447766628285" as const;

/**
 * VIP code is intentionally a soft, client-side gate (a marketing
 * gimmick). It is NOT a real security control — anyone viewing the
 * source code can read it. Treat it as a fun unlock, not a password.
 */
export const VIP_ACCESS_CODE = "VIPtest" as const;

/** Hard cap on quantity per item to prevent abuse / spam orders. */
export const MAX_QTY_PER_ITEM = 50;

/** Hard cap on number of distinct line items in the cart. */
export const MAX_CART_LINES = 50;

/** Minimum ms between checkout button clicks (anti-spam). */
export const CHECKOUT_COOLDOWN_MS = 3000;
