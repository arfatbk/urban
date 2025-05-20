'use client';

import { useCallback, useEffect, useRef } from 'react'
import { Branch } from './BranchCard'

interface BranchMapProps {
  branches: Branch[]
  selectedBranch?: Branch
  onBranchSelect: (branch: Branch) => void
}

declare global {
  interface Window {
    google: any
    initMap: () => void
  }
}

export default function BranchMap({ branches, selectedBranch, onBranchSelect }: BranchMapProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<any>(null)
  const markersRef = useRef<any[]>([])

  const initMap = useCallback(() => {
    if (!mapRef.current) return

    // Calculate center point from all branch locations
    const center = branches.reduce(
      (acc, branch) => {
        acc.lat += branch.latitude / branches.length
        acc.lng += branch.longitude / branches.length
        return acc
      },
      { lat: 0, lng: 0 }
    )

    const map = new window.google.maps.Map(mapRef.current, {
      center,
      zoom: 12,
      styles: [
        {
          featureType: 'poi',
          elementType: 'labels',
          stylers: [{ visibility: 'off' }],
        },
      ],
    })

    mapInstanceRef.current = map

    // Create markers for each branch
    markersRef.current = branches.map((branch) => {
      const marker = new window.google.maps.Marker({
        position: { lat: branch.latitude, lng: branch.longitude },
        map,
        title: branch.name,
        animation: window.google.maps.Animation.DROP,
      })

      marker.addListener('click', () => {
        onBranchSelect(branch)
      })

      return marker
    })
  }, [branches, onBranchSelect])

  useEffect(() => {
    // Load Google Maps script if not already loaded
    if (!window.google) {
      const script = document.createElement('script')
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`
      script.async = true
      script.defer = true
      script.onload = () => {
        initMap()
      }
      document.head.appendChild(script)
    } else {
      initMap()
    }

    return () => {
      // Cleanup markers
      markersRef.current?.forEach((marker) => marker.setMap(null))
    }
  }, [initMap])

  useEffect(() => {
    if (!selectedBranch || !mapInstanceRef.current) return

    // Center map on selected branch
    mapInstanceRef.current.panTo({
      lat: selectedBranch.latitude,
      lng: selectedBranch.longitude,
    })
    mapInstanceRef.current.setZoom(15)

    // Animate the selected branch's marker
    const selectedMarker = markersRef.current?.find(
      (marker) => marker.getTitle() === selectedBranch.name
    )
    if (selectedMarker) {
      selectedMarker.setAnimation(window.google.maps.Animation.BOUNCE)
      setTimeout(() => {
        selectedMarker.setAnimation(null)
      }, 1500)
    }
  }, [selectedBranch])

  return (
    <div className="relative h-[600px] w-full rounded-lg">
      <div ref={mapRef} className="absolute inset-0 rounded-lg" />
    </div>
  )
}
