import Navbar from '../components/Navbar';
import NavbarRooms from '../components/NavbarRooms';
import ResourcesBar from '../components/ResourcesBar';

const Room = () => {
  return (
    <div>
      <ResourcesBar />
      <Navbar />
      <NavbarRooms />
      {'Room'}
    </div>
  );
};

export default Room;
