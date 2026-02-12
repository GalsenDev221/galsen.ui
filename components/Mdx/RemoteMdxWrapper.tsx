"use client"
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import React from "react";
import H1 from "@/components/Mdx/H1";
import RenderHTMLFiles from "@/components/galsenUiComponents/RenderHTMLFiles";

const mdxComponents = {
  h1: H1,
  RenderHTMLFiles,
};

interface RemoteMdxWrapperProps {
  mdxSource: MDXRemoteSerializeResult;
  mdxScope?: Record<string, any>;
}

const RemoteMdxWrapper: React.FC<RemoteMdxWrapperProps> = ({ mdxSource, mdxScope = {} }) => {
  return (
    <div>
      <MDXRemote {...mdxSource} scope={mdxScope} components={mdxComponents} />
    </div>
  );
};

export default RemoteMdxWrapper;
