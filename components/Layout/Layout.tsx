import React from 'react';
import Head from 'next/head';

import { AppBar, Container, IconButton, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/menu';
import { Facebook, Instagram } from '@material-ui/icons';

export default function Layout({
  children,
  home
}: {
  children: React.ReactNode,
  home?: boolean
}) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <meta name="description" content="O encontro de motos da região metropolitana do RS" />
        <meta
          name="og:title"
        />
      </Head>

      <AppBar position='static'>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' noWrap>
            Moto Tri
          </Typography>
          <div style={{ flexGrow: 1 }} />
          <div>
            <IconButton aria-label="Ir para o Facebook do MotoTri" color="inherit">
              <Facebook />
            </IconButton>
            <IconButton aria-label="Ir para o Instagram do MotoTri" color="inherit">
              <Instagram />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>

      <Container>
        <main>{children}</main>
      </Container>
    </div>
  )
}