import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import CodeBlock from "@theme/CodeBlock";
import Layout from "@theme/Layout";
import React from "react";
import styles from "./styles.module.scss";

interface Feature {
    title: string;
    description: JSX.Element;
}

const features: Feature[] = [
    {
        title: "Sustainable Development",
        description: (
            <>
                TypeScript allows for much simpler and cleaner code compared to LUA, that can be easily understood
								every time you get back to working on your project.
            </>
        ),
    },
    {
        title: "Type Safety",
        description: (
            <>
                Static types can ease the mental burden of writing programs, by automatically tracking information the
                programmer would otherwise have to track mentally in some fashion. Types serve as documentation for
                yourself and other programmers and provide a ‘gradient’ that tells you what terms make sense to write.
            </>
        ),
    },
    {
        title: "IDE Support",
        description: (
            <>
                Types enable Lua developers to use highly-productive development tools and practices like static
                checking and code refactoring when developing Lua applications. TypeScript extensions are available for
                many text editors.
            </>
        ),
    },
];

const exampleSource = `
local function Main(display_handle: number, argument: any) {
}

local function Cleanup() {
}

local function Execute(Type: string, ...args: any[]) {
}

export = [Main, Cleanup, Execute]
`.trim();

const exampleOutput = `
local function Main(display_handle, argument)
end

local function Cleanup()
end

local function Execute(Type, ...)
end

return Main, Cleanup, Execute
`.trim();

function Feature({ title, description }: Feature) {
    return (
        <div className="col col--4">
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

export default function Home() {
    return (
        <Layout>
            <header className={`hero ${styles.heroBanner} container`}>
                <h1 className={`hero__title ${styles.title}`}>
                    <b>MA</b>
                    <wbr />
                    Tools
                    <wbr />
                </h1>
                <p className="hero__subtitle">Take advantage of LUA easily</p>
                <div className={styles.quickNavButtons}>
                    <Link
                        className={`button button--outline button--primary button--lg ${styles.quickNavButton}`}
                        to={useBaseUrl("docs/the-self-parameter")}
                    >
                        Get Started
                    </Link>
                    {/* <Link
                        className={`button button--outline button--success button--lg ${styles.quickNavButton}`}
                        to={useBaseUrl("play")}
                    >
                        Try Online
                    </Link> */}
                </div>
            </header>
            <main>
                <section className="padding-vert--md container">
                    <div className="row">
                        <div className={`col col--6 ${styles.example}`}>
                            <CodeBlock className="typescript">{exampleSource}</CodeBlock>
                        </div>
                        <div className={`col col--6 ${styles.example}`}>
                            <CodeBlock className="lua">{exampleOutput}</CodeBlock>
                        </div>
                    </div>
                </section>
                <section className="padding-vert--lg container">
                    <div className="row">
                        {features.map((props, idx) => (
                            <Feature key={idx} {...props} />
                        ))}
                    </div>
                </section>
            </main>
        </Layout>
    );
}