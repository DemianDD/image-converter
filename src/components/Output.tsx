const Output = ({ translatedText }: any) => {
  return (
    <div className="w-full">
      {translatedText != null ? (
        <div>
          Your Response:
          <pre>{JSON.stringify(translatedText, null, 2)}</pre>
        </div>
      ) : (
        <div className="text-center">Waiting for your data...</div>
      )}
    </div>
  );
};

export default Output;
