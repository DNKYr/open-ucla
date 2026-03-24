import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-10">
      <h1 className="mb-6 text-2xl font-bold text-gray-900">About OpenUCLA</h1>

      <div className="space-y-6 text-sm leading-relaxed text-gray-700">
        <section>
          <h2 className="mb-2 text-lg font-semibold text-gray-900">Mission</h2>
          <p>
            OpenUCLA is an open-source platform for sharing UCLA course materials — syllabi,
            notes, study guides, and more. We believe course materials should be free, open,
            and community-maintained. Built by Bruins, for Bruins.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-gray-900">How It Works</h2>
          <p>
            All course materials are stored in a public GitHub repository. The website is a
            friendly frontend that lets anyone browse, search, and download materials without
            needing to know git. Contributors sign in with GitHub and upload materials through
            a simple form — the website creates a pull request automatically.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-gray-900">Contributing</h2>
          <p>
            Have a syllabus, study guide, or notes you&apos;d like to share? Click the
            &ldquo;Contribute&rdquo; button in the header, sign in with GitHub, and upload
            your file. A maintainer will review and merge your contribution.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-gray-900">Fork for Your University</h2>
          <p>
            OpenUCLA is designed to be forkable. If you&apos;re at another university and want
            to create your own version, fork the GitHub repo, update the department list and
            branding, and deploy to Vercel for free.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-gray-900">Takedown Policy</h2>
          <p>
            We respect intellectual property. If you are a copyright holder and believe
            material on this site infringes your rights, please submit a{" "}
            <Link href="/takedown" className="text-[#2774AE] hover:underline">
              takedown request
            </Link>
            . We will acknowledge your request within 48 hours, hide the material pending
            review, and permanently remove it if the claim is valid. Uploaders may appeal
            within 14 days via the associated GitHub issue.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-gray-900">Open Source</h2>
          <p>
            OpenUCLA is licensed under the MIT License. The source code and all contributed
            materials are publicly available on GitHub. We are not affiliated with UCLA
            administration.
          </p>
        </section>
      </div>
    </div>
  );
}
