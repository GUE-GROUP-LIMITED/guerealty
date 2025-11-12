"use client";
import React from 'react';

export default function NoticeBanner() {
  return (
    <div style={{
      width: '100%',
      background: 'linear-gradient(90deg,#fff7e6,#fff1f0)',
      borderBottom: '1px solid rgba(0,0,0,0.06)',
      padding: '10px 16px',
      boxSizing: 'border-box',
      zIndex: 1200,
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <strong style={{ color: '#7a4a00' }}>Notice:</strong>
          <span style={{ color: '#2c2c2c' }}>
            GUE REALTY LIMITED is a newly registered subsidiary of the GUE Group and is currently exploring partnerships and investment opportunities. 
            Public listings, investment products and client testimonials will be published as partnerships and opportunities are formalized.
          </span>
        </div>
        <div style={{ fontSize: 13, color: '#555' }}>
          For corporate information visit <a href="https://www.gueplc.com" target="_blank" rel="noreferrer" style={{ color: '#0b66ff' }}>gueplc.com</a>
        </div>
      </div>
    </div>
  );
}
