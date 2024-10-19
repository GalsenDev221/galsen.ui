"use client"
import { MDXComponents } from "mdx/types";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import React from "react";

interface RemoteMdxWrapperProps {
  mdxSource: MDXRemoteSerializeResult;
  mdxComponents?: MDXComponents;
  mdxScope?: Record<string, any>;
}

const RemoteMdxWrapper: React.FC<RemoteMdxWrapperProps> = ({ mdxSource, mdxComponents = {}, mdxScope = {} }) => {
  return (
    <div>
      <MDXRemote {...mdxSource} scope={mdxScope} components={mdxComponents} />
    </div>
  );
};

export default RemoteMdxWrapper;
