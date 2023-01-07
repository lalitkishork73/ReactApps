import React from 'react'
import { Stack } from '@mui/material';
import { categories } from '../utils/constants';

const selectedCategories = 'New';

const SideBar = ({ selectedCategories, setSelectedCategory }) => {
    return (
        <>
            <Stack
                direction='row'
                sx={{
                    overflow: 'auto',
                    height: {
                        sx: 'auto', md: '95%'
                    },
                    flexDirection: { md: 'column' }
                }
                }>
                {
                    categories.map((category) => (<>
                        <div key={category.name}>
                            <button
                                className="category-btn"
                                onClick={() => setSelectedCategory(category.name)} 
                                style={{
                                    background: category.name === selectedCategories && '#FC1503',
                                    color: 'white'
                                }}
                            >
                                <span style={{ color: category.name === selectedCategories ? 'white' : 'red', marginRight: '15px' }}>{category.icon}</span>
                                <span
                                    style={{
                                        opacity: category.name === selectedCategories ? '1' : '0.8'
                                    }}
                                >{category.name}</span>
                            </button>
                        </div>
                    </>))
                }

            </Stack>
        </>
    )
}

export default SideBar