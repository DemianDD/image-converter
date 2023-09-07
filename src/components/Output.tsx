const Output = ({ translatedText }: any) => {
  return (
    <div className="w-full">
      Your Response:
      <pre>{JSON.stringify(translatedText, null, 2)}</pre>
    </div>
  );
};

export default Output;
