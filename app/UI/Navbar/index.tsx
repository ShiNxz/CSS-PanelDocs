'use client'

import ThemeSwitch from './Theme'
import { Link } from '@nextui-org/link'
import { useState } from 'react'
import {
	Navbar as NextUINavbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenuToggle,
	NavbarMenu,
	NavbarMenuItem,
} from '@nextui-org/navbar'

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const menuItems = ['Dashboard']

	return (
		<NextUINavbar
			onMenuOpenChange={setIsMenuOpen}
			classNames={{
				wrapper: 'max-w-[100%]',
			}}
			className='border-b border-[#eaeaea]'
		>
			<NavbarContent>
				<NavbarMenuToggle
					aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
					className='sm:hidden'
				/>
				<NavbarBrand>CSS Panel</NavbarBrand>
			</NavbarContent>

			<NavbarContent
				className='hidden sm:flex gap-4'
				justify='center'
			>
				<NavbarItem>
					<Link
						color='foreground'
						href='#'
					>
						Dashboard
					</Link>
				</NavbarItem>
			</NavbarContent>
			<NavbarContent justify='end'>
				<NavbarItem>
					<ThemeSwitch />
				</NavbarItem>
			</NavbarContent>
			<NavbarMenu>
				{menuItems.map((item, index) => (
					<NavbarMenuItem key={`${item}-${index}`}>
						<Link
							color={index === 2 ? 'primary' : index === menuItems.length - 1 ? 'danger' : 'foreground'}
							className='w-full'
							href='#'
							size='lg'
						>
							{item}
						</Link>
					</NavbarMenuItem>
				))}
			</NavbarMenu>
		</NextUINavbar>
	)
}

export default Navbar
