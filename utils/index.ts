const removeExtension = (ext: string, file: string) => {
  return file.replace(ext, "");
};

export { removeExtension };
