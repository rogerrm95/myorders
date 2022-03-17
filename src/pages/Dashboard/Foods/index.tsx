import { useState } from 'react'
// Componentes //
import { InformationHeader } from '../../../components/Dashboard/InformationHeader'
import { Navbar } from '../../../components/Dashboard/Navbar'
import { CategoryIcon } from '../../../components/Dashboard/CategoryIcon'
import { FoodList as FoodTable } from '../../../components/Dashboard/FoodList'
// Imagens //
import HeroImage from '../../../assets/food-hero-image.svg'
import MainPlateImage from '../../../assets/icons/categories/main-plate.svg'
import SnackImage from '../../../assets/icons/categories/snack.svg'
import MeatImage from '../../../assets/icons/categories/meat.svg'
import SaladImage from '../../../assets/icons/categories/salad.svg'
import SideDishesImage from '../../../assets/icons/categories/side-dishes.svg'
import JuiceImage from '../../../assets/icons/categories/juice.svg'
import DessertImage from '../../../assets/icons/categories/desserts.svg'

import { Categories, Container, FoodList } from './styles' // Styles //

export default function Foods() {
    const [categoryActive, setCategoryActive] = useState("Pratos Principais")

    return (
        <Container>

            <Navbar />

            <main>
                <InformationHeader
                    title='Gerenciamento do Menu'
                    description="Bem-vindo ao painel de gerenciamento do menu do seu restaurante,  nesta área você poderá cadastrar, alterar e excluir pratos
                    oferecido pelo seu estabelecimento."
                    heroImage={HeroImage}
                />

                <Categories>
                    <h1>Categorias</h1>
                    <ul>
                        <CategoryIcon label="Prato Principal" icon={MainPlateImage} onSelect={(value) => setCategoryActive(value)} />
                        <CategoryIcon label="Lanches" icon={SnackImage} onSelect={(value) => setCategoryActive(value)} />
                        <CategoryIcon label="Carnes" icon={MeatImage} onSelect={(value) => setCategoryActive(value)} />
                        <CategoryIcon label="Saladas" icon={SaladImage} onSelect={(value) => setCategoryActive(value)} />
                        <CategoryIcon label="Acompanhamentos" icon={SideDishesImage} onSelect={(value) => setCategoryActive(value)} />
                        <CategoryIcon label="Bebidas" icon={JuiceImage} onSelect={(value) => setCategoryActive(value)} />
                        <CategoryIcon label="Sobremesas" icon={DessertImage} onSelect={(value) => setCategoryActive(value)} />
                    </ul>
                </Categories>

                <FoodList>

                    <h1>{categoryActive}</h1>

                    <FoodTable category={categoryActive} />

                </FoodList>
            </main>

        </Container>
    )
}