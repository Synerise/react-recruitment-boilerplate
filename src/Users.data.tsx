import type { User, UserListKeys } from './Users.types';
import { UserWrapper, Identifier, Name, Email, Gender, Role } from './Users.styles';

export const columns: UserListKeys = {
    id: 'ID',
    first_name: 'First Name',
    last_name: 'Last Name',
    email: 'Email address',
    gender: 'Gender',
    role: 'Role',
};

export const users: User[] = [
    {
        id: 1,
        first_name: 'Marilin',
        last_name: 'Loyd',
        email: 'mloyd0@nifty.com',
        gender: 'Male',
        role: 'Construction Foreman',
    },
    {
        id: 2,
        first_name: 'Lynnelle',
        last_name: 'Tremberth',
        email: 'ltremberth1@imdb.com',
        gender: 'Female',
        role: 'Architect',
    },
    {
        id: 3,
        first_name: 'Diena',
        last_name: 'Duchasteau',
        email: 'dduchasteau2@privacy.gov.au',
        gender: 'Female',
        role: 'Architect',
    },
    {
        id: 4,
        first_name: 'Rebecka',
        last_name: 'Coorington',
        email: 'rcoorington3@craigslist.org',
        gender: 'Female',
        role: 'Engineer',
    },
    {
        id: 5,
        first_name: 'Carroll',
        last_name: 'Oldall',
        email: 'coldall4@businesswire.com',
        gender: 'Female',
        role: 'Project Manager',
    },
    {
        id: 6,
        first_name: 'Therese',
        last_name: 'Craft',
        email: 'tcraft5@ed.gov',
        gender: 'Female',
        role: 'Construction Expeditor',
    },
    {
        id: 7,
        first_name: 'Isacco',
        last_name: 'Heinke',
        email: 'iheinke6@ycombinator.com',
        gender: 'Male',
        role: 'Construction Worker',
    },
    {
        id: 8,
        first_name: 'Jone',
        last_name: 'Cowthard',
        email: 'jcowthard7@blogger.com',
        gender: 'Male',
        role: 'Subcontractor',
    },
    {
        id: 9,
        first_name: 'Gillian',
        last_name: 'Tingle',
        email: 'gtingle8@privacy.gov.au',
        gender: 'Female',
        role: 'Construction Manager',
    },
    {
        id: 10,
        first_name: 'Maurice',
        last_name: 'Fairbank',
        email: 'mfairbank9@imgur.com',
        gender: 'Male',
        role: 'Supervisor',
    },
];

export const renderUser = (user: User): JSX.Element => {
    const { id, first_name, last_name, email, gender, role } = user;
    return (
        <>
            <UserWrapper>
                <Identifier>{id}</Identifier>
                <Name>
                    {first_name} <br />{last_name}
                </Name>
                <Email>{email}</Email>
                <Gender>{gender}</Gender>
                <Role>{role}</Role>
            </UserWrapper>
        </>
    );
};