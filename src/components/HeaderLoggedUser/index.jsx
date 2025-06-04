import React, { useState } from "react";
import { Input, Avatar, Dropdown } from "antd";
import { UserOutlined, BellOutlined, LogoutOutlined, SettingOutlined } from "@ant-design/icons";
import {
  SearchWrapper,
  Nav,
  NavItem,
  MobileMenuButton,
  MobileNav,
  MobileNavItem,
  MobileSearchWrapper,
  ProfileSection,
  NotificationIcon,
  UserAvatar,
} from "./style";

import { HeaderWrapper, TextWrapper } from "../Header/style";
const { Search } = Input;

export default function HeaderLoggedUser() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Menu do dropdown do perfil
  const profileMenuItems = [
    {
      key: 'profile',
      icon: <UserOutlined />,
      label: 'Meu Perfil',
    },
    {
      key: 'settings',
      icon: <SettingOutlined />,
      label: 'Configurações',
    },
    {
      type: 'divider',
    },
    {
      key: 'logout',
      icon: <LogoutOutlined />,
      label: 'Sair',
      danger: true,
    },
  ];

  const handleProfileMenuClick = ({ key }) => {
    switch (key) {
      case 'profile':
        // Navegar para perfil
        console.log('Ir para perfil');
        break;
      case 'settings':
        // Navegar para configurações
        console.log('Ir para configurações');
        break;
      case 'logout':
        // Fazer logout
        console.log('Fazer logout');
        break;
      default:
        break;
    }
  };

  return (
    <>
      <HeaderWrapper>
        <TextWrapper><a href="/">InscriON</a></TextWrapper>
        
        {/* Desktop Search */}
        <SearchWrapper>
          <Search
            placeholder="Pesquise um Evento"
            allowClear
            style={{ width: "100%" }}
          />
        </SearchWrapper>

        {/* Desktop Navigation */}
        <Nav>
          <NavItem href="/organize-evento">Organize um Evento</NavItem>
          <NavItem href="/meus-eventos">Meus Eventos</NavItem>
        </Nav>

        {/* Profile Section */}
        <ProfileSection>
          <NotificationIcon>
            <BellOutlined />
          </NotificationIcon>
          
          <Dropdown
            menu={{
              items: profileMenuItems,
              onClick: handleProfileMenuClick,
            }}
            placement="bottomRight"
            arrow
          >
            <UserAvatar>
              <Avatar 
                size={40} 
                icon={<UserOutlined />}
                style={{ 
                  backgroundColor: '#1890ff',
                  cursor: 'pointer'
                }}
              />
            </UserAvatar>
          </Dropdown>
        </ProfileSection>

        {/* Mobile Menu Button */}
        <MobileMenuButton onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </MobileMenuButton>
      </HeaderWrapper>

      {/* Mobile Navigation */}
      <MobileNav isOpen={isMobileMenuOpen}>
        {/* Mobile Search */}
        <MobileSearchWrapper>
          <Search
            placeholder="Pesquise um Evento"
            allowClear
            style={{ width: "100%" }}
          />
        </MobileSearchWrapper>
        
        <MobileNavItem href="/organize-evento" onClick={() => setIsMobileMenuOpen(false)}>
          Organize um Evento
        </MobileNavItem>
        <MobileNavItem href="/meus-eventos" onClick={() => setIsMobileMenuOpen(false)}>
          Meus Eventos
        </MobileNavItem>
        <MobileNavItem href="/perfil" onClick={() => setIsMobileMenuOpen(false)}>
          Meu Perfil
        </MobileNavItem>
        <MobileNavItem href="/configuracoes" onClick={() => setIsMobileMenuOpen(false)}>
          Configurações
        </MobileNavItem>
        <MobileNavItem 
          href="/logout" 
          onClick={() => setIsMobileMenuOpen(false)}
          style={{ color: '#ff4d4f' }}
        >
          Sair
        </MobileNavItem>
      </MobileNav>
    </>
  );
}