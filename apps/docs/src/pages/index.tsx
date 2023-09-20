import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import { Redirect } from "@docusaurus/router";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={clsx("hero", styles.heroBanner)}>
      <div className="container">
        <h1>{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        {/* <Link
            className="button button--secondary button--lg"
            to="/docs/algorithm"
          >
            Algorithm

          </Link> */}
        <div className={styles.buttons}></div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      {/* <main>
        <Link
          className="button button--secondary button--lg"
          to="https://react.dev"
        >
          React
        </Link>
        <Link
          className="button button--secondary button--lg"
          to="https://jestjs.io"
        >
          Jest
        </Link>
      </main> */}
    </Layout>
  );
}
