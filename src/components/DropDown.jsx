import { useEffect, useState } from 'react'
import { Box, Button, Container, Typography, Collapse } from '@mui/material'
import { Close, Menu, ExpandMore, ExpandLess } from '@mui/icons-material'
import { Link } from 'react-router'

const categories = [
  'Акции',
  'Детская мебель',
  'Коляски',
  'Автокресла',
  'Одежда',
  'Кормление',
  'Гигиена и уход',
  'Умные игрушки',
]

const categoryDetails = {
  Акции: ['Скидки недели', 'Новинки со скидкой', 'Специальные предложения'],

  'Детская мебель': [
    { name: 'Кроватки', path: '/krovatki' },
    { name: 'Колыбели' },
    { name: 'Люльки'},
    { name: 'Пеленальные комоды' },
    { name: 'Шкафы', },
    { name: 'Аксессуары' },
  ],

  Коляски: [
    'Коляски для новорождённых',
    'Прогулочные коляски',
    'Трости',
    'Аксессуары для колясок',
  ],

  Автокресла: ['Группа 0+', 'Группа 1', 'Группа 2–3', 'Аксессуары'],

  Одежда: [
    'Для новорождённых',
    'Повседневная одежда',
    'Верхняя одежда',
    'Обувь',
  ],

  Кормление: [
    'Бутылочки',
    'Соски',
    'Стульчики для кормления',
    'Посуда',
  ],

  'Гигиена и уход': [
    'Подгузники',
    'Косметика',
    'Ванночки',
    'Аксессуары для ухода',
  ],

  'Умные игрушки': [
    'Развивающие игрушки',
    'Интерактивные игрушки',
    'Игрушки для малышей',
  ],
}

export default function Catalog({ variant = 'dropdown' }) {
  const [isCatalogOpen, setIsCatalogOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('Детская мебель')
  const [selectedSubcategory, setSelectedSubcategory] = useState('')
  const [expandedCategory, setExpandedCategory] = useState('')

  const selectCategory = (category) => {
    setSelectedCategory(category)
    setSelectedSubcategory('')
  }

  const selectSubcategory = (subcategory) => {
    setSelectedSubcategory(subcategory)
  }

  const toggleExpanded = (category) => {
    setExpandedCategory((prev) => (prev === category ? '' : category))
  }

  useEffect(() => {
    if (variant !== 'dropdown') return

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsCatalogOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [variant])

  if (variant === 'inline') {
    return (
      <Box component="nav" aria-label="Каталог товаров">
        <Typography
          sx={{
            color: '#426d83',
            fontSize: '1rem',
            fontWeight: 500,
            mb: 1.5,
          }}
        >
          Каталог товаров
        </Typography>

        <Box sx={{ display: 'grid', gap: 0.5 }}>
          {categories.map((category) => {
            const isExpanded = expandedCategory === category
            const subcategories = categoryDetails[category] ?? []

            return (
              <Box key={category}>
                <Box
                  component="button"
                  type="button"
                  onClick={() => toggleExpanded(category)}
                  aria-expanded={isExpanded}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%',
                    minHeight: 44,
                    px: 1.5,
                    border: 0,
                    borderRadius: '10px',
                    bgcolor: isExpanded ? '#F4F8FA' : 'transparent',
                    color: '#426d83',
                    font: 'inherit',
                    fontSize: '0.95rem',
                    textAlign: 'left',
                    cursor: 'pointer',
                    '&:hover': {
                      bgcolor: '#F4F8FA',
                    },
                  }}
                >
                  {category}

                  {isExpanded ? (
                    <ExpandLess sx={{ fontSize: 20, color: '#7FC9F0' }} />
                  ) : (
                    <ExpandMore sx={{ fontSize: 20, color: '#7FC9F0' }} />
                  )}
                </Box>

                <Collapse in={isExpanded} timeout="auto" unmountOnExit>
                  <Box sx={{ display: 'grid', gap: 0.5, pl: 3, py: 1 }}>
                    {subcategories.map((subcategory) => {
                      const name =
                        typeof subcategory === 'string'
                          ? subcategory
                          : subcategory.name

                      const path =
                        typeof subcategory === 'string'
                          ? '#'
                          : subcategory.path

                      return (
                        <Link
                          key={name}
                          to={path}
                          onClick={() => selectSubcategory(name)}
                          style={{
                            display: 'block',
                            color:
                              selectedSubcategory === name
                                ? '#73bfe7'
                                : '#446B80',
                            fontSize: '0.9rem',
                            textDecoration:
                              selectedSubcategory === name
                                ? 'underline'
                                : 'none',
                          }}
                        >
                          {name}
                        </Link>
                      )
                    })}
                  </Box>
                </Collapse>
              </Box>
            )
          })}
        </Box>
      </Box>
    )
  }

  return (
    <>
      <Box
        component="header"
        sx={{
          position: 'relative',
          zIndex: 2,
          bgcolor: '#fff',
        }}
      >
        <Container
          maxWidth={false}
          sx={{
            maxWidth: '1500px',
            minHeight: { xs: 86, sm: 104 },
            display: 'flex',
            alignItems: 'center',
            px: { xs: 2, sm: 3 },
          }}
        >
          <Button
            aria-controls="catalog-menu"
            aria-expanded={isCatalogOpen}
            aria-haspopup="true"
            onClick={() => setIsCatalogOpen((open) => !open)}
            variant="contained"
            endIcon={isCatalogOpen ? <Close /> : <Menu />}
            sx={{
              minWidth: { xs: 196, sm: 228 },
              height: { xs: 52, sm: 58 },
              px: { xs: 2, sm: 2.5 },
              justifyContent: 'space-between',
              borderRadius: '12px',
              bgcolor: isCatalogOpen ? '#426d83' : '#73c2eb',
              color: '#fff',
              fontSize: { xs: '0.98rem', sm: '1.08rem' },
              fontWeight: 400,
              letterSpacing: 0,
              boxShadow: 'none',
              '&:hover': {
                bgcolor: isCatalogOpen ? '#426d83' : '#67b9e3',
                boxShadow: 'none',
                opacity: 1,
              },
              '& .MuiButton-endIcon': {
                ml: 1,
                '& svg': {
                  fontSize: 25,
                },
              },
            }}
          >
            Каталог товаров
          </Button>
        </Container>
      </Box>

      {isCatalogOpen && (
        <>
          <Box
            onClick={() => setIsCatalogOpen(false)}
            sx={{
              position: 'fixed',
              inset: { xs: '86px 0 0', sm: '104px 0 0' },
              zIndex: 1,
              bgcolor: 'rgba(44, 69, 80, 0.24)',
            }}
          />

          <Box
            id="catalog-menu"
            component="section"
            aria-label="Каталог товаров"
            sx={{
              position: 'absolute',
              zIndex: 2,
              top: { xs: 86, sm: 104 },
              left: 0,
              width: '100%',
              minHeight: { xs: 'calc(100vh - 86px)', sm: 600 },
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: 'minmax(270px, 31%) 1fr',
              },
              bgcolor: '#fff',
              boxShadow: '0 12px 28px rgba(49, 76, 88, 0.12)',
            }}
          >
            <Box
              sx={{
                bgcolor: '#426d83',
                py: { xs: 2, sm: 3 },
                px: { xs: 2, sm: 0 },
              }}
            >
              <Box sx={{ maxWidth: 256, mx: 'auto' }}>
                {categories.map((category) => {
                  const isSelected = selectedCategory === category

                  return (
                    <Box
                      component="button"
                      type="button"
                      key={category}
                      aria-pressed={isSelected}
                      onClick={() => selectCategory(category)}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        width: '100%',
                        minHeight: { xs: 48, sm: 56 },
                        px: { xs: 2, sm: 3 },
                        border: 0,
                        borderRadius: '11px',
                        bgcolor: isSelected ? '#fff' : 'transparent',
                        color: isSelected ? '#426d83' : '#fff',
                        font: 'inherit',
                        fontSize: '1rem',
                        textAlign: 'left',
                        cursor: 'pointer',
                        transition: 'background-color 160ms ease',
                        '&:hover': {
                          bgcolor: isSelected
                            ? '#fff'
                            : 'rgba(255,255,255,0.12)',
                        },
                      }}
                    >
                      {category}
                    </Box>
                  )
                })}
              </Box>
            </Box>

            <Box sx={{ px: { xs: 3, sm: 7 }, py: { xs: 3, sm: 4 } }}>
              <Typography
                component="h2"
                sx={{
                  color: '#426d83',
                  fontSize: '1.05rem',
                  fontWeight: 400,
                  mb: 1.5,
                }}
              >
                {selectedCategory}
              </Typography>

              <Box
                component="nav"
                aria-label={`Категории: ${selectedCategory}`}
                sx={{
                  display: 'grid',
                  gap: 1.2,
                }}
              >
                {(categoryDetails[selectedCategory] ?? []).map(
                  (subcategory) => {
                    const name =
                      typeof subcategory === 'string'
                        ? subcategory
                        : subcategory.name

                    const path =
                      typeof subcategory === 'string'
                        ? '#'
                        : subcategory.path

                    const isSubcategorySelected =
                      selectedSubcategory === name

                    return (
                      <Link
                        key={name}
                        to={path}
                        onClick={() => selectSubcategory(name)}
                        style={{
                          display: 'block',
                          width: 'fit-content',
                          color: isSubcategorySelected
                            ? '#73bfe7'
                            : '#426d83',
                          fontSize: '1rem',
                          textDecoration: isSubcategorySelected
                            ? 'underline'
                            : 'none',
                        }}
                      >
                        {name}
                      </Link>
                    )
                  }
                )}
              </Box>
            </Box>
          </Box>
        </>
      )}
    </>
  )
}