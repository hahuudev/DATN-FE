import { Card, Input, Textarea, Button, Typography } from '@material-tailwind/react';
import { useNewPitchMutation } from '../Pitch/api/pitch.api';
import { toast } from 'react-toastify';

const PitchAdd = () => {
    const [newPitch] = useNewPitchMutation();

    const handleNewPicth = () => {
        newPitch({ name: 'Test', avatar: 'Test avatar' })
            .unwrap()
            .then((result) => {
                toast.success('Them thanhf cong');
            })
            .catch((err) => {
                toast.error(err.data.message);
            });
    };
    return (
        <div className="">
            {' '}
            <Card color="transparent" shadow={false}>
                <Typography variant="h4" color="blue-gray">
                    Create Pitch
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                    Enter your details to create pitch.
                </Typography>
                <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                    <div className="mb-4 flex flex-col gap-6">
                        <Input size="lg" label="Name" />
                        <Textarea size="lg" label="Description" />

                        <Input size="lg" label="Address" />
                    </div>

                    <Button className="mt-6" fullWidth onClick={handleNewPicth}>
                        Create
                    </Button>
                </form>
            </Card>
        </div>
    );
};

export default PitchAdd;
