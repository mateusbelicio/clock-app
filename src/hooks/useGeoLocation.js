import { useEffect, useState } from 'react';
import Ipbase from '@everapi/ipbase-js';

const ipBase = new Ipbase(import.meta.env.VITE_IPBASE_KEY);

export function useGeoLocation() {
  const [location, setLocation] = useState({ city: '', country: '' });

  useEffect(() => {
    const getIpInfo = async () => {
      try {
        const response = await ipBase.info();
        if (!response) throw new Error('Error fetching data.');

        const city = response.data.location.city.name;
        const country = response.data.location.country.alpha2;

        setLocation({ city, country });
      } catch (error) {
        console.error('Something went wrong: ', error);
        return null;
      }
    };

    if (!import.meta.env.PROD) return;
    getIpInfo();
  }, []);

  return location;
}
