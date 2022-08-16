import NextLink from 'next/link';
import ButtonIcon from 'components/button-icon';
import { AppleIcon, FbIcon, GoogleIcon } from 'components/icons';

const OAuth2 = () => {
  return (
    <div className="mt-6 flex items-center justify-center gap-4">
      <NextLink href="/account" passHref>
        <ButtonIcon asChild>
          <a>
            <AppleIcon />
          </a>
        </ButtonIcon>
      </NextLink>
      <ButtonIcon asChild>
        <a>
          <FbIcon />
        </a>
      </ButtonIcon>
      <ButtonIcon>
        <GoogleIcon />
      </ButtonIcon>
    </div>
  );
};

export default OAuth2;
