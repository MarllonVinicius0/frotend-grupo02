// Header.jsx
import React from "react";
import { Input } from "antd";
import {
  SearchWrapper,
  Nav,
  NavItem,
} from "./style";

import { HeaderWrapper, TextWrapper } from "../Header/style";
const { Search } = Input;

export default function HeaderPage() {
  return (
    <HeaderWrapper>
      <TextWrapper>InscriON</TextWrapper>
      <SearchWrapper>
        <Search
          placeholder="Pesquise um Evento"
          allowClear
          style={{ width: "100%", maxWidth: 350 }}
        />
      </SearchWrapper>
      <Nav>
        <NavItem href="/Login">Organize um Evento</NavItem>
        <NavItem href="/Login">Login</NavItem>
        <NavItem href="/Cadastro">Cadastre-se</NavItem>
      </Nav>
    </HeaderWrapper>
  );
}


// Comentado para evitar conflitos com o código atual

// Importa React e useState para gerenciar estado local
// import React, { useState } from "react";
// import { Input } from "antd";
// import {
//   SearchWrapper,
//   Nav,
//   NavItem,
// } from "./style";
// import { HeaderWrapper, TextWrapper } from "../Header/style";
// const { Search } = Input;

// export default function HeaderPage() {
//   // Estado para armazenar os resultados da busca
//   const [searchResults, setSearchResults] = useState([]);
//   // Estado para controlar o carregamento da busca
//   const [loading, setLoading] = useState(false);

//   // Função chamada ao realizar a busca
//   const handleSearch = async (value) => {
//     if (!value) return;
//     setLoading(true);
//     try {
//       // Faz uma requisição para a API de eventos
//       const response = await fetch(`https://sua-api.com/eventos?query=${encodeURIComponent(value)}`);
//       const data = await response.json();
//       // Atualiza os resultados da busca
//       setSearchResults(data.resultados); // ajuste conforme o retorno da sua API
//     } catch (error) {
//       // Em caso de erro, limpa os resultados
//       setSearchResults([]);
//     }
//     setLoading(false);
//   };

//   return (
//     <HeaderWrapper>
//       <TextWrapper>InscriON</TextWrapper>
//       <SearchWrapper>
//         <Search
//           placeholder="Pesquise um Evento"
//           allowClear
//           style={{ width: 350 }}
//           onSearch={handleSearch}
//           loading={loading}
//         />
//         {/* Exibe os resultados da busca em uma lista */}
//         {searchResults.length > 0 && (
//           <ul>
//             {searchResults.map((evento) => (
//               <li key={evento.id}>{evento.nome}</li>
//             ))}
//           </ul>
//         )}
//       </SearchWrapper>
//       <Nav>
//         <NavItem href="/Login">Organize um Evento</NavItem>
//         <NavItem href="/Login">Login</NavItem>
//         <NavItem href="/Cadastro">Cadastre-se</NavItem>
//       </Nav>
//     </HeaderWrapper>
//   );
// }