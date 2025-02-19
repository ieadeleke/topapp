import { Divider } from "@/components/Divider"
import Button from "@/components/buttons"
import { TextField } from "@/components/input/InputText"
import { GlobalActionContext } from "@/context/GlobalActionContext"
import UserContext from "@/context/UserContext"
import { useUpdateProfile } from "@/utils/apiHooks/profile/useUpdateProfile"
import { useContext, useEffect, useState } from "react"
import { Upload } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";


export const EditProfile = () => {
    const { isLoading, data, error, updateProfile } = useUpdateProfile()
    const { showSnackBar } = useContext(GlobalActionContext)
    const { user } = useContext(UserContext)
    const [firstName, setFirstName] = useState(user?.firstName);
    const [lastName, setLastName] = useState(user?.lastName);
    const [imageUrl, setImageUrl] = useState<any>(user?.imgUrl);
    const [imageUpload, setImageUpload] = useState<File>();
    const [imageUploadError, setImageUploadError] = useState(false);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        if (data) {
            showSnackBar({
                message: "Successfully updated",
                severity: 'success'
            })
        }
    }, [data])

    useEffect(() => {
        if (error) {
            showSnackBar({
                message: error,
                severity: 'error'
            })
        }
    }, [error])

    useEffect(() => {
        if (user) {
            setFirstName(user.firstName);
            setLastName(user.lastName);
            setImageUrl(user.imgUrl);
        }
    }, [user])

    const updateUserDetail = () => {
        if ((firstName && firstName.trim().length > 0) && (lastName && lastName.trim().length > 0)) {
            updateProfile({
                firstName,
                lastName
            })
        }
    }

    // function submit() {
    //     if (name && name.trim().length > 0) {
    //         updateProfile({
    //             name
    //         })
    //     }
    // }

    const uploadButton = (
        <div>
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div
                style={{
                    marginTop: 8,
                }}
            >
                Upload
            </div>
        </div>
    );

    const beforeUpload = (file: any) => {
        setImageUploadError(false);
        const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
        if (!isJpgOrPng) {
            showSnackBar({
                message: "You can only upload JPG/PNG file!",
                severity: 'error'
            });
            setImageUploadError(true);
        }
        const isLt2M = file.size / 1024 / 1024 < 5;
        if (!isLt2M) {
            showSnackBar({
                message: "Image must smaller than 5MB!",
                severity: 'error'
            })
            setImageUploadError(true);
        }
        // return isJpgOrPng && isLt2M;
        return false;
    };

    const getBase64 = (img: any) => {

        const file = img;
        const reader = new FileReader();

        reader.addEventListener("load", () => {
            return setImageUrl(reader.result)
        });

        if (!imageUploadError) {
            if (file) {
                reader.readAsDataURL(file);
            }
        }
    };

    const handleChange = (info: any) => {
        if (!imageUploadError) {
            setImageUpload(info.file);
            const urlPath = URL.createObjectURL(info.file);
            setImageUrl(urlPath);
            // getBase64(info.file);
        }
    };

    return <div className="flex flex-col gap-8">
        <div className="pb-3 border-b border-solid border-[#E0E0E0]">
            <h4 className="text-xl text-[#1B1B1B]">Edit Profile</h4>
        </div>
        <div className="flex flex-col md:grid grid-cols-2 gap-8">
            <div className="flex flex-col gap-2">
                <h1 className="font-campton text-sm">First Name</h1>
                <TextField.Input value={firstName} onChange={(evt) => setFirstName(evt.target.value)} placeholder="e.g John" className="outline outline-gray-100 px-2 rounded-lg" />
            </div>
            <div className="flex flex-col gap-2">
                <h1 className="font-campton text-sm">Last Name</h1>
                <TextField.Input value={lastName} onChange={(evt) => setLastName(evt.target.value)} placeholder="e.g Doe" className="outline outline-gray-100 px-2 rounded-lg" />
            </div>
            {/* <div className="flex flex-col gap-2">
                <h1>Email address</h1>
                <TextField.Input disabled value={user?.email} className="outline-none bg-gray-100 px-2 rounded-lg" />
            </div> */}
        </div>

        <div className="flex justify-end">
            <Button onClick={updateUserDetail} isLoading={isLoading} disabled={isLoading} variant="contained" className="bg-dark px-12 py-3">Save Changes</Button>
        </div>
    </div>
}