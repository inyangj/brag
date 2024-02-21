const InfoField = ({ label, value }) => (
    <div className="mb-4">
      <p className="text-[16px] font-semibold">{label}</p>
      <p className="border rounded-lg border-gray-300 p-2 w-full">{value}</p>
    </div>
  );

export default InfoField;