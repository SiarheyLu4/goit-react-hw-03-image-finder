import React, { Component } from "react";
import styled from "styled-components";


export class Searchbar extends Component {
  render() {
    return (
        <Header>
          <SearchForm class="form">
            <button type="submit" class="button">
              <span class="button-label">Search</span>
            </button>

            <input
              class="input"
              type="text"
              autocomplete="off"
              autofocus
              placeholder="Search images and photos"
            />
          </SearchForm>
        </Header>
    )
  }
}

const Header = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-color: #3f51b5;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`

const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
`