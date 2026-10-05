import PrivacyPolicyShell, { PrivacySection } from "./PrivacyPolicyShell";

const Cloud9InventoryPrivacy = () => (
  <PrivacyPolicyShell
    appName="Cloud 9 Inventory"
    packageId="app.zumy.cloud9.employee"
    operator="Zumy LLC, Wood-Ridge, NJ, for Cloud 9 Kitchen & Market"
    effectiveDate="October 5, 2026"
    contactEmail="info@zumy.app"
  >
    <PrivacySection title="1. What this app is">
      <p>
        Cloud 9 Inventory is an internal employee tool for Cloud 9 Kitchen &amp; Market
        staff. It scans product barcodes, looks products up, and records inventory
        counts, prices, and label batches against the company's own Odoo server (
        <code>admin.cloud9market.net</code>). It is not offered to the general public
        and contains no advertising.
      </p>
    </PrivacySection>

    <PrivacySection title="2. Data we collect">
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong className="text-foreground">Staff login credentials</strong> — the Odoo
          username and password you type are transmitted over HTTPS to our Odoo server
          to authenticate you. The password is never stored on the device; only a
          revocable session token is kept, in the device's encrypted storage.
        </li>
        <li>
          <strong className="text-foreground">Inventory data you enter</strong> — product
          names, barcodes/SKUs, categories, costs, prices, quantities, expiry dates,
          and label batches. This is business data sent to our Odoo server to update
          store inventory.
        </li>
        <li>
          <strong className="text-foreground">Camera frames (processed on-device only)</strong> —
          the camera is used solely to read barcodes. Frames are analyzed in memory on
          the phone and are never saved, uploaded, or shared.
        </li>
      </ul>
    </PrivacySection>

    <PrivacySection title="3. Data we do NOT collect">
      <p>
        We do not collect precise location, contacts, call or message history,
        payment information, or advertising identifiers. We do not use analytics,
        crash-reporting SDKs, or ad networks in this app.
      </p>
    </PrivacySection>

    <PrivacySection title="4. Sharing">
      <p>
        We do not sell, rent, or share staff or inventory data with third parties.
        Data flows only between the app on the store device and our Odoo server.
      </p>
    </PrivacySection>

    <PrivacySection title="5. Security">
      <p>
        All server communication uses HTTPS. Session tokens live in the device's
        encrypted credential storage and are wiped on explicit sign-out. Access to
        the Odoo backend is limited to authorized staff accounts with least-privilege
        roles.
      </p>
    </PrivacySection>

    <PrivacySection title="6. Retention and deletion">
      <p>
        Inventory records are business records retained in Odoo per store policy. To
        revoke device access, ask a manager to reset your Odoo password or deactivate
        your account. To request correction or deletion of personal data (e.g. your
        staff login), contact us below; Uninstalling the app removes all on-device
        data (session, preferences) immediately.
      </p>
    </PrivacySection>

    <PrivacySection title="7. Children's privacy">
      <p>
        This is a workforce tool for store employees only and is not directed at
        children under 13.
      </p>
    </PrivacySection>

    <PrivacySection title="8. Changes to this policy">
      <p>
        Material changes will be posted on this page with a new effective date. Staff
        will be notified through store management.
      </p>
    </PrivacySection>
  </PrivacyPolicyShell>
);

export default Cloud9InventoryPrivacy;
