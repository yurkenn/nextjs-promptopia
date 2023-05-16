import React from 'react';

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">Discover & Share</h1>
      <br className="max-md:hidden" />
      <span className="orange_gradient text-center">AI-Powered Prompts</span>
      <p className="desc text-center">
        Promptopia is an open-source AI prompting platform that allows users to discover and share
        AI-generated prompts.
      </p>
      {/* feed */}
    </section>
  );
};

export default Home;
