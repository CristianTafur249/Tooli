import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProfileIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="svg-icon">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
)

const HomeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="svg-icon">
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
)

const SearchIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="svg-icon">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
)

export default function NavBar({ activeTab = 'home', theme = 'white' }) {
  const navigate = useNavigate()
  const isWhiteTheme = theme === 'white'

  return (
    <div className={isWhiteTheme ? 'bottom-nav-white' : 'bottom-nav-blue'} role="navigation" aria-label="nav-bar">
      {/* Profile Button */}
      <button
        onClick={() => navigate('/profile')}
        className={activeTab === 'profile' ? (isWhiteTheme ? 'active-home' : 'active-search') : ''}
        aria-label="Perfil"
      >
        <ProfileIcon />
      </button>

      {/* Home Button */}
      <button
        onClick={() => navigate('/home')}
        className={activeTab === 'home' ? (isWhiteTheme ? 'active-home' : 'active-search') : ''}
        aria-label="Home"
      >
        <HomeIcon />
      </button>

      {/* Search Button */}
      <button
        onClick={() => navigate('/search')}
        className={activeTab === 'search' ? (isWhiteTheme ? 'active-home' : 'active-search') : ''}
        aria-label="Buscar"
      >
        <SearchIcon />
      </button>
    </div>
  )
}
