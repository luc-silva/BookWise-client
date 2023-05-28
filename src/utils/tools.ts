import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

/**
 * Redirect user if not logged
 * @param user - User session object.
 */
export const RedirectUser = ({ user }: { user: UserSession }) => {
    const navigate = useNavigate();
    useEffect(() => {
        if (!user.isLogged) {
            navigate("/login");
        }
    }, [user.isLogged]);

    return null;
};

/**
 * Create a image and returns its path with given buffer.
 * @param arr Buffer array.
 * @returns Path for the image object.
 */
export function createImageBlob(arr: number[]) {
    let image = new Uint8Array(arr);
    let blob = new Blob([image]);
    return URL.createObjectURL(blob);
}
