import type { NextPage } from 'next';
import NextLink from 'next/link';
import ButtonIcon from 'components/button-icon';
import { AppleIcon, FbIcon, GoogleIcon } from 'components/icons';
import TextField from 'components/text-field/TextField';

const HomePage: NextPage = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-600">
      <div className="flex h-80 w-full max-w-sm flex-col items-center justify-end rounded-md bg-gray-800 p-4">
        <div className="mt-4 flex gap-4">
          {/* link (route) */}
          <NextLink href="/account" passHref>
            <ButtonIcon asChild>
              <a>
                <AppleIcon />
              </a>
            </ButtonIcon>
          </NextLink>
          {/* external link */}
          <ButtonIcon asChild>
            <a
              href="https://www.linkedin.com/in/gabrielmlinassi/"
              target="_blank"
              rel="noreferrer"
            >
              <FbIcon />
            </a>
          </ButtonIcon>
          {/* button */}
          <ButtonIcon onClick={() => alert('clicked')}>
            <GoogleIcon />
          </ButtonIcon>
        </div>
        <div className="mt-4 w-full space-y-4">
          <TextField name="fullName" label="Full Name" type="text" fullWidth />
          <TextField
            name="email"
            label="Email"
            type="email"
            placeholder="ie. john.doe@email.com"
          />
          <TextField fullWidth name="pwd" label="Password" type="password" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
