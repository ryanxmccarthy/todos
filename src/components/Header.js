import React from 'react'

const Header = () => {
    return (
        <header>
            <h1
                style={{
                    color: '#444',
                    fontSize: '6rem',
                    fontWeight: '600',
                    lineHeight: '1em',
                    marginBottom: '2rem',
                    textAlign: 'center',
                    textTransform: 'lowercase'
                }}
            >
                todos
            </h1>
        </header>
    )
}

export default Header