import Button from '@/components/Button';
import Space from '@/components/Space';
import LogoText from '@/components/svg/LogoText';
import { useModal } from '@/hooks/useModal';
import { createFileRoute } from '@tanstack/react-router';
import { OwnerModal } from '@/routes/-components/OwnerModal';

export const Route = createFileRoute('/login')({
  component: () => <LoginPage />,
});

const LoginPage = () => {
  const { openModal } = useModal();

  const handleOwnerLogin = () => {
    openModal(({ isOpen, onClose }) => (
      <OwnerModal isOpen={isOpen} onClose={onClose} />
    ));
  };

  return (
    <main className="flex flex-col h-screen w-full items-center justify-end bg-gradient-to-b from-[#FFECE9] to-white">
      <h2 className="text-body2 text-center text-gray-600">
        오늘도 다시 찾아온 손님
        <br />
        단골을 만드는 가장 따뜻한 방법
      </h2>
      <Space className="h-[15px]" />
      <LogoText />
      <Space className="h-[120px]" />
      <div className="relative flex w-full justify-center items-center">
        <img
          src="/images/user.png"
          alt="user"
          className="w-[240px] h-[240px]"
        />
        <img
          src="/images/login-article.png"
          alt="login-article"
          className="absolute z-0 -bottom-50 left-1/2 transform max-w-[380px] -translate-x-1/2 pointer-events-none"
        />
      </div>
      <div className="px-5 w-full gap-[5px] flex flex-col">
        <Button
          onClick={() => {}}
          className="w-full text-button1 text-[#181600] py-[17px] bg-[#FEE500] rounded-[12px]"
        >
          카카오 로그인
        </Button>
        <Button
          onClick={handleOwnerLogin}
          className="w-full text-button1 text-gray-800 py-[17px] bg-primary-50 rounded-[12px]"
        >
          사장님 로그인
        </Button>
      </div>
      <Space className="h-16" />
    </main>
  );
};
