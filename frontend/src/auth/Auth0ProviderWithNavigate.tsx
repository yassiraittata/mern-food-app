import { Auth0Provider, User, type AppState } from "@auth0/auth0-react"
import React from "react"

type props = {
  children: React.ReactNode
}
function Auth0ProviderWithNavigate({ children }: props) {
  const domain = import.meta.env.VITE_AUTH0_DOMAIN
  const clientID = import.meta.env.VITE_AUTH0_CLIENT_ID
  const redirectUri = import.meta.env.VITE_AUTH0_CALLBACK_URL

  if (!domain || !clientID || !redirectUri) {
    throw new Error("Unable to initialise auth")
  }

  function onRedirect(appState: AppState, user?: User) {}

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientID}
      authorizationParams={{ redirect_uri: window.location.origin }}
      onRedirectCallback={onRedirect}
    >
      {children}
    </Auth0Provider>
  )
}

export default Auth0ProviderWithNavigate
