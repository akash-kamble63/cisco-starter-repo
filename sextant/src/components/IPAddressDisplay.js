import React, { useEffect, useState } from "react";

const IPAddressDisplay = ({ addressType }) => {
  const [ipAddress, setIPAddress] = useState("");

  useEffect(() => {
    const fetchIPAddress = async () => {
      const url = `https://api.ipify.org?format=json&${addressType}`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        setIPAddress(data.ip);
      } catch (error) {
        console.error("Error fetching IP address:", error);
      }
    };

    fetchIPAddress();
  }, [addressType]);

  return (
    <div>
      <h2 style={{fontSize:"16px"}}>Public {addressType === "ipv6" ? "IPv6" : "IPv4"} Address:</h2>
      <p>{ipAddress}</p>
    </div>
  );
};

export default IPAddressDisplay;
