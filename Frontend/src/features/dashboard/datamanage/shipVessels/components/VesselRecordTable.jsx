
import { useDispatch, useSelector } from 'react-redux';
import VesselRecordRow from './VesselRecordRow'
import { useEffect } from 'react';
import { fetchVesselSRecord } from '../../../../../stores/informationData/vesselRecordSlice';

const VesselRecordTable = () => {
  const dispatch = useDispatch();
    const { vesselrecords, loading, error } = useSelector((state) => state.images || {});
    console.log(vesselrecords);
    
    useEffect(() => {
      dispatch(fetchVesselSRecord());
    }, [dispatch]);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

  return (
    <div className="p-6">
      <div className="overflow-x-auto">
        <table className="w-full min-w-max">
          <thead className="bg-gray-200">
            <tr className="text-left text-sm font-medium text-gray-600">
              <th className="px-4 py-3 rounded-tl-lg">Date</th>
              <th className="px-4 py-3">Area</th>
              <th className="px-4 py-3">Internal Pilot</th>
              <th className="px-4 py-3">Outside Pilot</th>
              <th className="px-4 py-3"> Load DroneA</th>
              <th className="px-4 py-3 rounded-tr-lg"> Load DroneB</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 border-y-2">
          {vesselrecords?.length > 0 ? (
              vesselrecords.map((vesselrecord) => (
                <VesselRecordRow key={vesselrecord.id} vesselrecord={vesselrecord} />
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center py-4 text-gray-500">
                  No vessels Record
                </td>
              </tr>
            )}
           
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default VesselRecordTable