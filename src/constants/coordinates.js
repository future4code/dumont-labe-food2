export const goToLogin = (history) => {
    history.push('/login')
}

export const goToSignUp = (history) => {
    history.push('/cadastro')
}

export const goToFeed = (history) => {
    history.push("/feed")
}

export const goToRestaurantDetails = (history, id) => {
    history.push(`/restaurante/${id}`)
}

export const goToProfile = (history) => {
    history.push('/perfil')
}

export const goToAdress = (history) => {
    history.push('/endereço')
}

export const goToCart = (history) => {
    history.push('/carrinho')
}

export const goToEditProfile = (history) => {
    history.push('/perfil/editar')
}

export const logout = (history) => {
    window.localStorage.clear();
    history.push("/login");
}

export const goBack = (history) => {
    history.goBack()
}

export const goToSearch = (history) => {
    history.push('/search')
}