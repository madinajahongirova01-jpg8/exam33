import React from 'react'
import { Stack, Pagination, PaginationItem } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';



export default function Pag() {
  return (
<Stack spacing={2} sx={{ paddingTop: "40px" }}>
      <Pagination
        count={3}
        hidePrevButton 
        renderItem={(item) => (
          <PaginationItem
            slots={{
              next: () => (
                <span style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
                  Дальше <KeyboardArrowRightIcon />
                </span>
              ),
            }}
            {...item}
          />
        )}
        sx={{
          '& .MuiPaginationItem-root': {
            color: '#3d6a7d', 
            fontSize: '20px',
            fontFamily: 'inherit',
            border: 'none',
            borderRadius: '8px',
            minWidth: '42px',
            height: '42px',
            margin: '0 4px',
            
            
            '&.Mui-selected': {
              border: '1.5px solid #3d6a7d',
              backgroundColor: 'transparent',
              '&:hover': {
                backgroundColor: 'rgba(61, 106, 125, 0.08)',
              },
            },
            '&:hover': {
              backgroundColor: 'transparent',
            },
          },
          
          '& .MuiPaginationItem-next': {
            width: 'auto',
            padding: '0 8px',
          },
        }}
      />
    </Stack>
  )
}
