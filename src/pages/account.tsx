import type { GetServerSideProps, NextPage } from 'next'

const AccountPage: NextPage = () => {
  return <div className="bg-yellow-500 text-red-500">Account Page</div>
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  }
}

export default AccountPage
