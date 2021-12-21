import React from 'react'

const Header = () => {
    const headerStyle = {
        lineHeight: '1.5em',
        padding: '20px 0',
    }

    return (
        <header style={headerStyle}>
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