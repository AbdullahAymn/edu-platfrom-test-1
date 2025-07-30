import {useAuth} from "../context/AuthContext";

const RequireAdmin: React.FC<{ children: React.ReactNode}> = ({children}) => {
    const {role} = useAuth();
    if (role !== 'admin') {
        return (
        <div className="text-center font-bold text-white px-4 py-6">
            You do not have permission to view this content
        </div>
        )
    }
    return <>{children}</>;
}

export default RequireAdmin;