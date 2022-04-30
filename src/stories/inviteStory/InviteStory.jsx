import React from 'react';
import { inviteStory } from '../../components/helper/DummyData';
import { Icons } from '../../components/icons';
import { Images } from '../../components/images';
import Items from '../../components/listItems/Items';
import ListsItems from '../../components/listItems/ListsItems';
import ShowItem from '../../components/showItem/ShowItem';

const InviteStory = () => {
  return (
    <div>
      <ShowItem
        title='Your Invite Awaits'
        subtitle='Say yes to these historical romances'
        pic={Images.Image5}
        icon={<Icons.Mail />}
      >
        <div>
          <h2>An Earnest Favour</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
            velit expedita fugiat, quia aperiam illo suscipit officiis quisquam
            reprehenderit corporis dolorum fugit eligendi consectetur quasi rem?
            Adipisci, tempora? Officia, illo?
          </p>
          <div>
            <span>prince</span>
            <span>lovetriangle</span>
            <span>regency</span>
          </div>
        </div>
      </ShowItem>
      <ListsItems>
        {inviteStory.map((item) => (
          <Items item={item} />
        ))}
      </ListsItems>
    </div>
  );
};

export default InviteStory;
