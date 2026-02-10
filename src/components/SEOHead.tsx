import { Helmet } from "react-helmet";

interface SEOHeadProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEOHead = ({
  title = "Ritesh Singh Full Stack Developer & Blockchain Engineer",
  description = "Full Stack Developer and Blockchain Engineer. SIH Finalist 2025, Cardano Hackathon Finalist. Building end-to-end applications from frontend to smart contracts.",
  image = "/banner.jpg",
  url = "https://ritesh.codexly.xyz",
  type = "website",
}: SEOHeadProps) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ritesh Singh",
    url: url,
    image: image,
    sameAs: [
      "https://github.com/neutron420",
      "https://www.linkedin.com/in/ritesh-singh1/",
      "https://x.com/RiteshS18572143",
      "https://leetcode.com/u/neutron420/",
    ],
    jobTitle: "Full Stack Developer & Blockchain Engineer",
    worksFor: {
      "@type": "Organization",
      name: "Freelance",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "C.V. Raman Global University",
    },
    knowsAbout: [
      "Full Stack Development",
      "Blockchain Development",
      "Smart Contracts",
      "React",
      "Next.js",
      "Node.js",
      "TypeScript",
      "Solidity",
      "Web3",
    ],
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      <meta name="theme-color" content="#0a0a0a" />
      <meta name="author" content="Ritesh Singh" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      
      {/* Keywords */}
      <meta
        name="keywords"
        content="Ritesh Singh, Full Stack Developer, Blockchain Developer, Web3, React, Next.js, Node.js, TypeScript, Solidity, Smart Contracts, Portfolio"
      />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Ritesh Singh Portfolio" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content="@RiteshS18572143" />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Structured Data */}
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
    </Helmet>
  );
};

export default SEOHead;
