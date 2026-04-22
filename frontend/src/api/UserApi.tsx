import { useMutation } from "@tanstack/react-query"

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

type CreateUserRequest = {
  auth0Id: string
  email: string
}

export const useCreateUser = () => {
  const createUserFn = async (data: CreateUserRequest) => {
    const response = await fetch(`${API_BASE_URL}/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      throw new Error("Failed to create user")
    }
  }

  const {
    mutateAsync: createUser,
    isPending: isLoading,
    isError,
    isSuccess,
  } = useMutation({
    mutationFn: createUserFn,
  })

  return { createUser, isLoading, isError, isSuccess }
}
