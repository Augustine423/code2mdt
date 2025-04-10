// eslint-disable-next-line react/prop-types
const VesselDetailRowUI = ({vessel:{ id,name,logo,flag,imo,mmsi,callSign}}) => {
  return (
    <tr className="hover:bg-gray-100">
      <td className="px-4 py-3">
        {/* <div className="w-[120px] h-10 bg-gray-50 rounded flex items-center justify-center">
          <img
            // src={vessel.shipLogo}
           src="/src/assets/vesselPhoto/shipimage.jpg"
            alt={vessel.shipName}
            className="w-[69px] h-auto object-contain"
          />
        </div> */}
         <img 
      // src={company.coLogo} 
     src="/src/assets/vesselPhoto/shipimage.jpg"
      alt={name}
      className="w-[90px] h-[40px] object-cover  border border-gray-300 shadow-sm"
    />
      </td>
      <td className="px-4 py-3 text-sm">{name}</td>
      <td className="px-4 py-3 text-sm">{flag}</td>
      <td className="px-4 py-3 text-sm">{imo}</td>
      <td className="px-4 py-3 text-sm">{mmsi}</td>
      <td className="px-4 py-3 text-sm">{callSign}</td>
    </tr>
  );
};

export default VesselDetailRowUI;
