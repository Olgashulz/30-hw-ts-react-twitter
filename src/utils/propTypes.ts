export interface PropTypesInt {
    name: string,
    avatar: string,
    showModal: boolean,
    setShowModal: (bool: boolean) => void
    setAvatar: (newUrl: string) => void
    setName: (newName: string) => void
}