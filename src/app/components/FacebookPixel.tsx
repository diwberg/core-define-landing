'use client'

import { useEffect } from 'react'
import Script from 'next/script'

// Facebook Pixel ID from environment variables
const FACEBOOK_PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID || ''

declare global {
  interface Window {
    fbq: (...args: unknown[]) => void
  }
}

interface FacebookPixelProps {
  pixelId?: string
}

export default function FacebookPixel({ pixelId = FACEBOOK_PIXEL_ID }: FacebookPixelProps) {
  useEffect(() => {
    // Initialize Facebook Pixel and track PageView
    if (typeof window !== 'undefined' && window.fbq && pixelId) {
      window.fbq('track', 'PageView')
      console.log('Facebook Pixel PageView tracked for:', pixelId)
    }
  }, [pixelId])

  // Don't render if no pixel ID is provided
  if (!pixelId) {
    console.warn('Facebook Pixel ID not found in environment variables')
    return null
  }

  return (
    <>
      <Script
        id="facebook-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${pixelId}');
            fbq('track', 'PageView');
          `,
        }}
      />
      <noscript>
        <img 
          height="1" 
          width="1" 
          style={{ display: 'none' }}
          src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
    </>
  )
}

// Helper functions to track events
export const trackEvent = (eventName: string, parameters?: Record<string, unknown>) => {
  if (typeof window !== 'undefined' && window.fbq && FACEBOOK_PIXEL_ID) {
    window.fbq('track', eventName, parameters)
    console.log(`Facebook Pixel event tracked: ${eventName}`, parameters)
  }
}

export const trackCustomEvent = (eventName: string, parameters?: Record<string, unknown>) => {
  if (typeof window !== 'undefined' && window.fbq && FACEBOOK_PIXEL_ID) {
    window.fbq('trackCustom', eventName, parameters)
    console.log(`Facebook Pixel custom event tracked: ${eventName}`, parameters)
  }
}

// Specific tracking functions for the landing page
export const trackLead = () => {
  trackEvent('Lead', {
    content_name: 'Core Define 3.0',
    content_category: 'Fitness Program',
    value: 97.00,
    currency: 'BRL'
  })
}

export const trackInitiateCheckout = () => {
  trackEvent('InitiateCheckout', {
    content_name: 'Core Define 3.0',
    content_category: 'Fitness Program',
    value: 97.00,
    currency: 'BRL',
    num_items: 1
  })
}

export const trackPurchase = (value: number = 97.00) => {
  trackEvent('Purchase', {
    content_name: 'Core Define 3.0',
    content_category: 'Fitness Program',
    value: value,
    currency: 'BRL'
  })
}

export const trackClick = (buttonLocation: string) => {
  trackCustomEvent('ButtonClick', {
    button_location: buttonLocation,
    content_name: 'Core Define 3.0',
    page_url: typeof window !== 'undefined' ? window.location.href : ''
  })
}

export const trackViewContent = (contentType: string) => {
  trackEvent('ViewContent', {
    content_type: contentType,
    content_name: 'Core Define 3.0'
  })
}

export const trackAffiliatePageView = () => {
  trackCustomEvent('AffiliatePageView', {
    content_name: 'Core Define Affiliate Program',
    content_category: 'Affiliate',
    page_url: typeof window !== 'undefined' ? window.location.href : ''
  })
}

export const trackAffiliateClick = () => {
  trackCustomEvent('AffiliateClick', {
    content_name: 'Core Define Affiliate Program',
    content_category: 'Affiliate',
    button_location: 'affiliate_signup',
    page_url: typeof window !== 'undefined' ? window.location.href : ''
  })
}

// Hook to easily use Facebook Pixel tracking in components
export const useFacebookPixel = () => {
  return {
    trackLead,
    trackClick,
    trackInitiateCheckout,
    trackPurchase,
    trackViewContent,
    trackAffiliatePageView,
    trackAffiliateClick,
    trackEvent,
    trackCustomEvent
  }
} 