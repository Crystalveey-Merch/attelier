/* eslint-disable react/prop-types */
import {
    Box,
    // Button,
    // ButtonGroup,
    Flex,
    // HStack,
    // IconButton,
    Input,
    // SkeletonText,
    // Text,
} from '@chakra-ui/react'
// import { FaLocationArrow, FaTimes } from 'react-icons/fa'

import {
    useJsApiLoader,
    GoogleMap,
    Marker,
    Autocomplete,
    DirectionsRenderer,
} from '@react-google-maps/api'
import { useEffect, useRef, useState } from 'react'

const center = { lat: -1.930780, lng: 30.132000 }


export const RouteMap = ({ setDistanceValue, setPickupLocation, setAddress, title }) => {
    const destinationAdd = '5 Olu Olusakin Rd, Aja, Lekki 106104, Lagos'
    const apiKey = import.meta.env.VITE_APP_GOOGLE_MAPS_API_KEY

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: apiKey,
        libraries: ['places'],
    })
    //  import.meta.env.VITE_PAYSTACK_PUBLIC_KEY;
    const [map, setMap] = useState(null);
    const [directionsResponse, setDirectionsResponse] = useState(null);
    const [distance, setDistance] = useState('');
    const [duration, setDuration] = useState('');
    const originRef = useRef(null);
    const destiantionRef = useRef(null);
    const [originValue, setOriginValue] = useState('');
    // console.log('originValue:', map)

    const [markerPosition, setMarkerPosition] = useState(center)

    useEffect(() => {
        if (!destinationAdd || destinationAdd.trim() === '' || !isLoaded) {
            return;
        }
        // Convert address to coordinates using Google Geocoding API
        const geocoder = new window.google.maps.Geocoder();
        geocoder.geocode({ address: destinationAdd }, (results, status) => {
            if (status === 'OK' && results && results[0]) { // Check if results is not null
                const { lat, lng } = results[0].geometry.location;
                setMarkerPosition({ lat: lat(), lng: lng() });
                // console.log('Geocode was successful:', results[0].geometry.location);
            } else {
                console.error('Geocode was not successful for the following reason:', status);
            }
        });

    }, [destinationAdd, isLoaded, map]);



    useEffect(() => {
        async function calculateRoute() {
            // Clear the previous directions response
            setDirectionsResponse(null);

            if (!originValue || originValue.trim() === '' || !destiantionRef.current || destiantionRef.current.value === '') {
                return;
            }
            const directionsService = new window.google.maps.DirectionsService();

            const results = await directionsService.route({
                origin: originValue,
                destination: destiantionRef.current.value,
                travelMode: window.google.maps.TravelMode.DRIVING,
            });
            // console.log('results:', results)
            setDirectionsResponse(results);
            setDistance(results.routes[0]?.legs[0]?.distance?.text || '');
            setDuration(results.routes[0]?.legs[0]?.duration?.text || '');
            setPickupLocation(originValue);
            setDistanceValue(results.routes[0]?.legs[0]?.distance?.value || 0);
            setAddress(originValue);
        }
        calculateRoute();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [originValue]);

    // console.log('originValue:', originValue)


    // async function calculateRouteFromInputs() {
    //     if (!originRef.current || !destiantionRef.current || originRef.current.value === '' || destiantionRef.current.value === '') {
    //         return;
    //     }
    //     const directionsService = new google.maps.DirectionsService();
    //     const results = await directionsService.route({
    //         origin: originRef.current.value,
    //         destination: destiantionRef.current.value,
    //         travelMode: google.maps.TravelMode.DRIVING,
    //     });
    //     setDirectionsResponse(results);
    //     setDistance(results.routes[0]?.legs[0]?.distance?.text || '');
    //     setDuration(results.routes[0]?.legs[0]?.duration?.text || '');
    // }

    // function clearMarkers() {
    //     const markers = map?.getMarkers();
    //     markers.forEach(marker => marker.setMap(null));
    // }

    // function clearRoute() {
    //     setDirectionsResponse(null);
    //     setDistance('');
    //     setDuration('');
    //     if (originRef.current) {
    //         originRef.current.value = '';
    //     }
    //     if (destiantionRef.current) {
    //         destiantionRef.current.value = '';
    //     }
    //     clearMarkers(); // Clear existing markers on the map
    // }

    if (!isLoaded) {
        return <></>
    }

    return (
        <div className='flex flex-col gap-8 sm:gap-6'>
            <div className='flex gap-5'>
                <div className='flex flex-col gap-4'>
                    <h3 className='text-xl font-semibold sm:text-lg'>
                        {title}
                    </h3>
                    <p>
                        Pick the nearest bus stop if you exact location is not available
                    </p>
                    <Autocomplete
                        // onLoad={(autocomplete) => {
                        //     console.log('Autocomplete loaded:', autocomplete)
                        // }}
                        onPlaceChanged={() => {
                            if (originRef.current) {
                                // console.log('Place changed:', originRef.current.value)
                                setOriginValue(originRef.current.value)
                            }
                        }}
                    >
                        <Input
                            type='text'
                            placeholder='Select Pickup point'
                            className='w-80 h[40px] text-gray-900 text-sm font-inter font-medium px-3 py-2.5 border border-gray-400 rounded-md focus:outline-none focus:ring-0 focus:border-blue-400 focus:ring-transparent transition duration-300 ease-in-out'
                            ref={originRef}
                        />
                    </Autocomplete>
                </div>
                <div className='flyx flex-col gap-4 hidden'>
                    <h3 className='text-xl font-semibold'>
                        Destination
                    </h3>
                    <Autocomplete>
                        <Input
                            type='text'
                            placeholder='Destination'
                            className='w-80 h[40px] text-gray-900 text-sm font-inter font-medium px-3 py-2.5 border border-gray-400 rounded-md focus:outline-none focus:ring-0 focus:border-blue-400 focus:ring-transparent transition duration-300 ease-in-out'
                            ref={destiantionRef}
                            value={destinationAdd}
                            disabled
                        />
                    </Autocomplete>
                </div>
            </div>

            <div className='flex gap-5 sm:gap-3'>
                <h3 className='text-lg font-semibold'>
                    <span>Distance:</span> &nbsp; <span className='text-blue-500'>{distance}</span>
                </h3>
                <h3 className='text-lg font-semibold'>
                    <span>Duration:</span> &nbsp; <span className='text-blue-500'>{duration}</span>
                </h3>
            </div>
            {/* <Box
                p={4}
                borderRadius='lg'
                m={4}
                bgColor='white'
                shadow='base'
                minW='container.md'
                zIndex='1'
            >
                <HStack spacing={2} justifyContent='space-between'>
                    <ButtonGroup>
                        <Button colorScheme='pink' type='submit' onClick={calculateRoute}>
                            Calculate Route
                        </Button>
                        <IconButton
                            aria-label='center back'
                            icon={<FaTimes />}
                            onClick={clearRoute}
                        />
                    </ButtonGroup>
                </HStack>
            </Box> */}

            {/* <HStack spacing={2} justifyContent='space-between'>
                <IconButton
                    aria-label='center back'
                    icon={<FaLocationArrow />}
                    isRound
                    onClick={() => {
                        map?.panTo(center)
                        map?.setZoom(15)
                    }}
                />
            </HStack> */}

            <Flex
                flexDirection='column'
                alignItems='start'
                className='h-[400px] w-full relative'
            >
                <Box position='absolute' left={0} top={0} h='100%' w='100%'>
                    <GoogleMap
                        center={markerPosition}
                        zoom={15}
                        mapContainerStyle={{ width: '100%', height: '100%' }}
                        options={{
                            zoomControl: false,
                            streetViewControl: true,
                            mapTypeControl: false,
                            fullscreenControl: true,
                        }}
                        onLoad={() => setMap(map)}
                    >
                        <Marker position={markerPosition} />
                        {directionsResponse && (
                            <DirectionsRenderer directions={directionsResponse} />
                        )}
                    </GoogleMap>
                </Box>
            </Flex>
        </div>
    )
}
