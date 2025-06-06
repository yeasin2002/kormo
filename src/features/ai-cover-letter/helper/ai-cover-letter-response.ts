export const AiCoverLetterResponse = async () => {
  // fake timer
  await new Promise((resolve) => setTimeout(resolve, 5000));

  return {
    message: 'Cover letter generated successfully',
  };
};
